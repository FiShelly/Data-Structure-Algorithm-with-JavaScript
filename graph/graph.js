(function () {

    var testin = this.testin;

    var Graph = function () {
        this.vertices = [];
        this.adjList = new Map();
    };

    Graph.prototype.addVertex = function (v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    };

    Graph.prototype.addEdge = function (v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    };

    Graph.initializeColor = function (graph) {
        var color = {};
        graph.vertices.forEach(function (v) {
            color[v] = 'white';
        });
        return color;
    };

    Graph.dfsVisit = function (u, color, cb) {
        color[u] = 'grey';
        cb && cb(u);
        var neighbors = this.adjList.get(u);

        neighbors.forEach(function (w) {
            if (color[w] === 'white') {
                Graph.dfsVisit.bind(this)(w, color, cb);
            }
        });
        color[u] = 'black';
    };

    Graph.prototype.dfs = function (cb) {
        var color = Graph.initializeColor(this);

        this.vertices.forEach(function (v) {
            Graph.dfsVisit.bind(this)(v, color, cb);
        });
    };

    Graph.prototype.bfs = function (v, cb) {
        var queue = new Queue();
        var color = Graph.initializeColor(this);
        var dis = [], pred = [];
        queue.enqueue(v);

        this.vertices.forEach(function (v) {
            dis[v] = 0;
            pred[v] = null;
        });

        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            var neighbors = this.adjList.get(u);
            color[u] = 'grey';
            neighbors.forEach(function (w) {
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                    dis[w] = dis[u] + 1;
                    pred[w] = u;
                }
            });
            color[u] = 'black';
            cb && cb(u);
        }
        return {
            distances: dis,
            predecessors: pred
        };
    };

    window.addEventListener('load', function () {
        testin.test('1. Graph operation', function () {
            var graph = new Graph();

            var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
            myVertices.forEach(function (v) {
                graph.addVertex(v);
            });

            graph.addEdge('A', 'B');
            graph.addEdge('A', 'C');
            graph.addEdge('A', 'D');
            graph.addEdge('C', 'D');
            graph.addEdge('C', 'G');
            graph.addEdge('D', 'G');
            graph.addEdge('D', 'H');
            graph.addEdge('B', 'E');
            graph.addEdge('B', 'F');
            graph.addEdge('E', 'I');

            // testin.assert(hashTable.get($0) === $0, 'The key is ' + $0 + ', the value is ' + $0);
        });
    });
})();
