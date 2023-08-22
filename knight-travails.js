function Node (pos, path) {
    if (pos[0]<0 || pos[0]>7 || pos[1]<0 || pos[1]>7) return null;
    return {pos, path}
}

function knightMoves(start, end) {
    let queue = [Node(start, [[start]])]
    let currentNode = queue.shift()

    while (currentNode.pos[0] !== end[0] || currentNode.pos[1] !== end[1]) {
        let moves = [
            [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
            [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
            [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
            [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
            [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
            [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
            [currentNode.pos[0] - 1, currentNode.pos[1] + 2],
            [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
        ]
        moves.forEach(move => {
            let node = Node(move, currentNode.path.concat([move]))
            if (node) queue.push(node)
        })
        currentNode = queue.shift();
    }
    console.log(
        `You made it in ${currentNode.path.length - 1} moves! Here's your path:`
      );
      currentNode.path.forEach(move => {
        console.log(move);
      });
}

knightMoves([3,3],[4,3]);