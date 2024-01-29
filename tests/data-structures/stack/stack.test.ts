import { expect, test } from "bun:test"
import { Stack } from '@/data-structures/stack/Stack'

test('pop removes item from top of stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
});

test('stack is empty on creation', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBeTrue();
});

test('peek returns top of stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toEqual(2);
    expect(stack.peek()).toEqual(2);
})

test('size returns number of items in stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.size()).toEqual(2);
})
