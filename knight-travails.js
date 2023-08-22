function Node (pos, path) {
    if (pos[0]<0 || pos[0]>7 || pos[1]<0 || pos[1]>7) return null;
    return {pos, path}
}