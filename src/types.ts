export namespace BehaviorGraphTypes {
    export type BehaviorGraphNode = {
        id: string,
        processPath?: string,
        triggeredProcesses?: string[],
        infectedProcesses?: string[],
        isDirty?: boolean,
        events: string,
        parentProcessId: string,
        isRoot: number,
    };

    export type BehaviorGraphLink = {
        source: string,
        target: string,
        value: number,
        reason: string
    };

    export type BehaviorGraph = {
        nodes: BehaviorGraphNode[],
        links: BehaviorGraphLink[]
    };
}
