lass Vertex {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(value) {
    let vertex = new Vertex(value);
    this.vertices[value] = vertex;
    return vertex;
  }

  addEdge(startVertex, endVertex, weight) {
    if (!this.vertices[startVertex]) {
      this.addVertex(startVertex);
    }
    if (!this.vertices[endVertex]) {
      this.addVertex(endVertex);
    }
    this.vertices[startVertex].edges.push(new Edge(this.vertices[endVertex], weight));
  }
}
