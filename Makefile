all: hello-exec hello-spawn hello-pipe hello-vm hello-stdin hello-stream

hello-exec:
	nodejs hello-exec.js

hello-spawn:
	nodejs hello-spawn.js

hello-pipe:
	nodejs hello-pipe.js


hello-vm:
	nodejs hello-vm.js

hello-stdin:
	date | nodejs hello-stdin.js

hello-stream:
	nodejs hello-stream.js

