import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import api from '@/services/api';
import { useMissionStore } from '@/store/missionStore';
import { DrawableMap } from '@/components/maps/DrawableMap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import {
  ArrowLeft,
  MapPin,
  Settings,
  Plane,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { MissionPattern, GeoJSONPolygon } from '@/types';

const missionSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  pattern: z.enum(['GRID', 'CROSSHATCH', 'PERIMETER']),
  altitude: z.number().min(10).max(500),
  overlap: z.number().min(0).max(90),
  speed: z.number().min(1).max(30),
  gridSpacing: z.number().min(1).max(100).optional(),
  crosshatchAngle: z.number().min(0).max(90).optional(),
  perimeterOffset: z.number().min(0).max(50).optional(),
});

type MissionFormData = z.infer<typeof missionSchema>;

export default function MissionPlanner() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { drawnPolygon, setDrawnPolygon, clearDrawnPolygon } = useMissionStore();
  const [step, setStep] = useState<'form' | 'map' | 'review'>('form');

  const form = useForm<MissionFormData>({
    resolver: zodResolver(missionSchema),
    defaultValues: {
      name: '',
      pattern: 'GRID',
      altitude: 100,
      overlap: 60,
      speed: 10,
      gridSpacing: 20,
      crosshatchAngle: 45,
      perimeterOffset: 10,
    },
  });

  const pattern = form.watch('pattern');

  const createMutation = useMutation({
    mutationFn: api.createMission,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['missions'] });
      clearDrawnPolygon();
      toast({
        title: 'Mission Created',
        description: 'Your mission has been successfully created.',
      });
      navigate(`/missions/${data.id}`);
    },
    onError: (error: Error) => {
      toast({
        title: 'Failed to Create Mission',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: MissionFormData) => {
    if (!drawnPolygon) {
      toast({
        title: 'Survey Area Required',
        description: 'Please draw a survey area on the map.',
        variant: 'destructive',
      });
      setStep('map');
      return;
    }

    createMutation.mutate({
      name: data.name,
      pattern: data.pattern,
      altitude: data.altitude,
      overlapPercentage: data.overlap,
      speed: data.speed,
      patternConfig: {
        gridSpacing: data.pattern === 'GRID' ? data.gridSpacing : undefined,
        crosshatchAngle: data.pattern === 'CROSSHATCH' ? data.crosshatchAngle : undefined,
        perimeterOffset: data.pattern === 'PERIMETER' ? data.perimeterOffset : undefined,
      },
      surveyArea: drawnPolygon,
    });
  };

  const handlePolygonChange = (polygon: GeoJSONPolygon | null) => {
    setDrawnPolygon(polygon);
  };

  const canProceedToReview = drawnPolygon !== null;

  return (
    <div className="space-y-6">
      {}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/missions">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mission Planner</h1>
          <p className="text-muted-foreground">
            Configure and plan a new drone survey mission
          </p>
        </div>
      </div>

      {}
      <div className="flex items-center gap-2">
        <StepIndicator
          step={1}
          label="Configure"
          isActive={step === 'form'}
          isCompleted={step !== 'form'}
          onClick={() => setStep('form')}
        />
        <div className="h-px flex-1 bg-border" />
        <StepIndicator
          step={2}
          label="Draw Area"
          isActive={step === 'map'}
          isCompleted={step === 'review'}
          onClick={() => setStep('map')}
        />
        <div className="h-px flex-1 bg-border" />
        <StepIndicator
          step={3}
          label="Review"
          isActive={step === 'review'}
          isCompleted={false}
          onClick={() => canProceedToReview && setStep('review')}
          disabled={!canProceedToReview}
        />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {}
          {step === 'form' && (
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Mission Settings
                  </CardTitle>
                  <CardDescription>
                    Configure the basic parameters for your mission
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mission Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter mission name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pattern"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Survey Pattern</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select pattern" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="GRID">Grid</SelectItem>
                            <SelectItem value="CROSSHATCH">Crosshatch</SelectItem>
                            <SelectItem value="PERIMETER">Perimeter</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          The flight pattern for the survey
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plane className="h-5 w-5" />
                    Flight Parameters
                  </CardTitle>
                  <CardDescription>
                    Set altitude, speed, and overlap settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="altitude"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Altitude: {field.value}m</FormLabel>
                        <FormControl>
                          <Slider
                            min={10}
                            max={500}
                            step={10}
                            value={[field.value]}
                            onValueChange={([val]) => field.onChange(val)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="overlap"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Overlap: {field.value}%</FormLabel>
                        <FormControl>
                          <Slider
                            min={0}
                            max={90}
                            step={5}
                            value={[field.value]}
                            onValueChange={([val]) => field.onChange(val)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="speed"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Speed: {field.value}m/s</FormLabel>
                        <FormControl>
                          <Slider
                            min={1}
                            max={30}
                            step={1}
                            value={[field.value]}
                            onValueChange={([val]) => field.onChange(val)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Pattern Configuration</CardTitle>
                  <CardDescription>
                    Configure pattern-specific parameters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    {pattern === 'GRID' && (
                      <FormField
                        control={form.control}
                        name="gridSpacing"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Grid Spacing: {field.value}m</FormLabel>
                            <FormControl>
                              <Slider
                                min={1}
                                max={100}
                                step={1}
                                value={[field.value || 20]}
                                onValueChange={([val]) => field.onChange(val)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    {pattern === 'CROSSHATCH' && (
                      <FormField
                        control={form.control}
                        name="crosshatchAngle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Crosshatch Angle: {field.value}°</FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={90}
                                step={5}
                                value={[field.value || 45]}
                                onValueChange={([val]) => field.onChange(val)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    {pattern === 'PERIMETER' && (
                      <FormField
                        control={form.control}
                        name="perimeterOffset"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Perimeter Offset: {field.value}m</FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={50}
                                step={1}
                                value={[field.value || 10]}
                                onValueChange={([val]) => field.onChange(val)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="lg:col-span-2 flex justify-end">
                <Button type="button" onClick={() => setStep('map')}>
                  Continue to Map
                </Button>
              </div>
            </div>
          )}

          {}
          {step === 'map' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Define Survey Area
                  </CardTitle>
                  <CardDescription>
                    Use the polygon tool to draw the survey area on the map
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <DrawableMap
                    onPolygonChange={handlePolygonChange}
                    initialPolygon={drawnPolygon}
                    className="h-[500px]"
                  />
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep('form')}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep('review')}
                  disabled={!canProceedToReview}
                >
                  Continue to Review
                </Button>
              </div>
            </div>
          )}

          {}
          {step === 'review' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Review Mission
                  </CardTitle>
                  <CardDescription>
                    Confirm your mission settings before creating
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="font-medium">Mission Details</h4>
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Name</dt>
                          <dd className="font-medium">{form.getValues('name') || 'Unnamed'}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Pattern</dt>
                          <dd className="font-medium">{form.getValues('pattern')}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Altitude</dt>
                          <dd className="font-medium">{form.getValues('altitude')}m</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Overlap</dt>
                          <dd className="font-medium">{form.getValues('overlap')}%</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Speed</dt>
                          <dd className="font-medium">{form.getValues('speed')}m/s</dd>
                        </div>
                      </dl>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Survey Area</h4>
                      <div className="aspect-video rounded-lg border bg-muted/50 flex items-center justify-center">
                        {drawnPolygon ? (
                          <div className="text-center">
                            <CheckCircle className="h-8 w-8 text-status-completed mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">
                              {drawnPolygon.coordinates[0].length - 1} vertices defined
                            </p>
                          </div>
                        ) : (
                          <p className="text-muted-foreground">No area defined</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep('map')}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={createMutation.isPending || !drawnPolygon}
                >
                  {createMutation.isPending ? 'Creating...' : 'Create Mission'}
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}

interface StepIndicatorProps {
  step: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
  disabled?: boolean;
}

function StepIndicator({ step, label, isActive, isCompleted, onClick, disabled }: StepIndicatorProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive
          ? 'bg-primary text-primary-foreground'
          : isCompleted
            ? 'bg-status-completed/10 text-status-completed cursor-pointer'
            : disabled
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-muted cursor-pointer'
        }`}
    >
      <span className={`h-6 w-6 rounded-full flex items-center justify-center text-sm font-medium ${isActive
          ? 'bg-primary-foreground text-primary'
          : isCompleted
            ? 'bg-status-completed text-status-completed-foreground'
            : 'bg-muted'
        }`}>
        {isCompleted ? <CheckCircle className="h-4 w-4" /> : step}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
