import { validateTransition, getNextState } from '../mission.state-machine';

describe('Mission State Machine', () => {
    describe('validateTransition', () => {
        it('should allow ASSIGN_DRONE from CREATED state', () => {
            expect(() => validateTransition('CREATED', 'ASSIGN_DRONE')).not.toThrow();
        });

        it('should allow START from READY state', () => {
            expect(() => validateTransition('READY', 'START')).not.toThrow();
        });

        it('should allow PAUSE from IN_PROGRESS state', () => {
            expect(() => validateTransition('IN_PROGRESS', 'PAUSE')).not.toThrow();
        });

        it('should allow RESUME from PAUSED state', () => {
            expect(() => validateTransition('PAUSED', 'RESUME')).not.toThrow();
        });

        it('should allow ABORT from IN_PROGRESS state', () => {
            expect(() => validateTransition('IN_PROGRESS', 'ABORT')).not.toThrow();
        });

        it('should throw for invalid transition START from CREATED', () => {
            expect(() => validateTransition('CREATED', 'START')).toThrow();
        });

        it('should throw for transition from COMPLETED state', () => {
            expect(() => validateTransition('COMPLETED', 'START')).toThrow();
        });

        it('should throw for transition from ABORTED state', () => {
            expect(() => validateTransition('ABORTED', 'RESUME')).toThrow();
        });
    });

    describe('getNextState', () => {
        it('should return READY after ASSIGN_DRONE from CREATED', () => {
            expect(getNextState('CREATED', 'ASSIGN_DRONE')).toBe('READY');
        });

        it('should return IN_PROGRESS after START from READY', () => {
            expect(getNextState('READY', 'START')).toBe('IN_PROGRESS');
        });

        it('should return PAUSED after PAUSE from IN_PROGRESS', () => {
            expect(getNextState('IN_PROGRESS', 'PAUSE')).toBe('PAUSED');
        });

        it('should return IN_PROGRESS after RESUME from PAUSED', () => {
            expect(getNextState('PAUSED', 'RESUME')).toBe('IN_PROGRESS');
        });

        it('should return COMPLETED after COMPLETE from IN_PROGRESS', () => {
            expect(getNextState('IN_PROGRESS', 'COMPLETE')).toBe('COMPLETED');
        });

        it('should return ABORTED after ABORT from IN_PROGRESS', () => {
            expect(getNextState('IN_PROGRESS', 'ABORT')).toBe('ABORTED');
        });

        it('should throw for invalid transition', () => {
            expect(() => getNextState('COMPLETED', 'START')).toThrow();
        });
    });
});
