import { MissionStatus } from '../../../prisma/generated/client';
import { InvalidStateTransitionError } from '../../shared/http/error-handler';



type MissionAction = 'ASSIGN_DRONE' | 'START' | 'PAUSE' | 'RESUME' | 'COMPLETE' | 'ABORT';

const STATE_TRANSITIONS: Record<MissionStatus, MissionAction[]> = {
    CREATED: ['ASSIGN_DRONE'],
    READY: ['START', 'ABORT'],
    IN_PROGRESS: ['PAUSE', 'COMPLETE', 'ABORT'],
    PAUSED: ['RESUME', 'ABORT'],
    COMPLETED: [],
    ABORTED: [],
};

const ACTION_TO_NEW_STATE: Record<MissionAction, MissionStatus> = {
    ASSIGN_DRONE: 'READY',
    START: 'IN_PROGRESS',
    PAUSE: 'PAUSED',
    RESUME: 'IN_PROGRESS',
    COMPLETE: 'COMPLETED',
    ABORT: 'ABORTED',
};

export function canTransition(currentStatus: MissionStatus, action: MissionAction): boolean {
    const allowedActions = STATE_TRANSITIONS[currentStatus];
    return allowedActions.includes(action);
}

export function getNextState(currentStatus: MissionStatus, action: MissionAction): MissionStatus {
    if (!canTransition(currentStatus, action)) {
        throw new InvalidStateTransitionError(currentStatus, action);
    }
    return ACTION_TO_NEW_STATE[action];
}

export function validateTransition(currentStatus: MissionStatus, action: MissionAction): void {
    if (!canTransition(currentStatus, action)) {
        throw new InvalidStateTransitionError(currentStatus, action);
    }
}

export function isTerminalState(status: MissionStatus): boolean {
    return status === 'COMPLETED' || status === 'ABORTED';
}

export function isActiveState(status: MissionStatus): boolean {
    return status === 'IN_PROGRESS';
}

export function canAbort(status: MissionStatus): boolean {
    return STATE_TRANSITIONS[status].includes('ABORT');
}
