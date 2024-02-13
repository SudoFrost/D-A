import { expect, test } from "bun:test"
import { Queue } from "./Queue"

test('enqueue adds item to back of queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toEqual(1);
    expect(queue.size()).toEqual(2);
});

test('dequeue removes item from front of queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.size()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.size()).toEqual(0);
});

test('peek returns item at front of queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toEqual(1);
    expect(queue.size()).toEqual(2);
})

test('queue is empty on creation', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBeTrue();
    expect(queue.size()).toEqual(0);
});

test('queue is not empty after adding item', () => {
    const queue = new Queue();

    queue.enqueue(1);

    expect(queue.isEmpty()).toBeFalse();
    expect(queue.size()).toEqual(1);
})


