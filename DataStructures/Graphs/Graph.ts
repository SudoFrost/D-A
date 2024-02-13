
export default class Graph<TNode> {
    private _nodes: TNode[];
    private _matrix: boolean[][];

    constructor(size: number) {
        this._nodes = new Array();
        this._matrix = new Array(size)
            .fill(null)
            .map(() => new Array(size).fill(false));
    }

    addNode(node: TNode) {
        if (this._nodes.includes(node)) {
            throw new Error('Node already exists');
        }
        this._nodes.push(node);
    }

    addEdge(n1: TNode, n2: TNode) {
        const IN1 = this._nodes.indexOf(n1);
        const IN2 = this._nodes.indexOf(n2);
        if (IN1 < 0 || IN2 < 0) {
            throw new Error('Node does not exist');
        }
        this._matrix[IN1][IN2] = true;
    }

    checkEdge(n1: TNode, n2: TNode) {
        const IN1 = this._nodes.indexOf(n1);
        const IN2 = this._nodes.indexOf(n2);
        if (IN1 < 0 || IN2 < 0) {
            throw new Error('Node does not exist');
        }
        return this._matrix[IN1][IN2];
    }
}
