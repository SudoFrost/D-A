import { test, expect } from 'bun:test';
import { PriorityQueue } from './PriorityQueue';


class Notification {
    constructor(public message: string, public receiver: "admin" | "user", public priority: number) { }
}

function compare(a: Notification, b: Notification) {
    if (a.receiver == "admin" && b.receiver == "user") {
        return 1;
    }
    if (a.receiver == "user" && b.receiver == "admin") {
        return -1;
    }
    return a.priority - b.priority;
}

test('Enqueues and dequeues in priority order', () => {
    const queue = new PriorityQueue(compare);

    queue.enqueue(new Notification('msg1', 'admin', 1));
    queue.enqueue(new Notification('msg2', 'user', 2));
    queue.enqueue(new Notification('msg3', 'admin', 3));

    expect(queue.dequeue()?.message).toEqual('msg3');
    expect(queue.dequeue()?.message).toEqual('msg1');
    expect(queue.dequeue()?.message).toEqual('msg2');
})

test('Peek returns next notification', () => {
    const queue = new PriorityQueue(compare);

    queue.enqueue(new Notification('msg1', 'admin', 1));
    queue.enqueue(new Notification('msg2', 'user', 2));
    queue.enqueue(new Notification('msg3', 'admin', 3));

    expect(queue.peek()?.message).toEqual('msg3');
    expect(queue.peek()?.message).toEqual('msg3');
})

test('Size updates on enqueue and dequeue', () => {
    const queue = new PriorityQueue(compare);

    queue.enqueue(new Notification('msg1', 'admin', 1));
    queue.enqueue(new Notification('msg2', 'user', 2));
    queue.enqueue(new Notification('msg3', 'admin', 3));

    expect(queue.size()).toEqual(3);

    queue.dequeue();
    queue.dequeue();

    expect(queue.size()).toEqual(1);

    queue.dequeue();

    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toBeTrue();
})


test('Multiple enqueue and dequeue', () => {
    const queue = new PriorityQueue(compare);

    queue.enqueue(new Notification('msg1', 'admin', 1));
    queue.enqueue(new Notification('msg2', 'user', 2));
    queue.enqueue(new Notification('msg3', 'admin', 3));
    queue.enqueue(new Notification('msg4', 'user', 4));
    queue.enqueue(new Notification('msg5', 'admin', 5));
    queue.enqueue(new Notification('msg6', 'user', 6));

    expect(queue.size()).toEqual(6);

    expect(queue.dequeue()?.message).toEqual('msg5');
    expect(queue.dequeue()?.message).toEqual('msg3');
    expect(queue.dequeue()?.message).toEqual('msg1');
    expect(queue.dequeue()?.message).toEqual('msg6');
    expect(queue.dequeue()?.message).toEqual('msg4');
    expect(queue.dequeue()?.message).toEqual('msg2');

    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toBeTrue();
})

