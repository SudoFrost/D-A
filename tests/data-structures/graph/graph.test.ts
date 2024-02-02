import { describe, expect, it } from "bun:test";
import Graph from '@/data-structures/graph/Graph';

describe('Graph', () => {
    it('should add nodes and edges', () => {
        const graph = new Graph<number>(5);
        graph.addNode(1);
        graph.addNode(2);
        graph.addNode(3);
        graph.addEdge(1, 2);
        graph.addEdge(2, 3);
        expect(graph.checkEdge(1, 2)).toBe(true);
        expect(graph.checkEdge(2, 3)).toBe(true);
        expect(graph.checkEdge(1, 3)).toBe(false);
    })

    it('should throw error if node does not exist', () => {
        const graph = new Graph<number>(5);
        graph.addNode(1);
        graph.addNode(2);
        graph.addNode(3);
        expect(() => graph.checkEdge(1, 4)).toThrow();
    })
})