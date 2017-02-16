all: hello-exec hello-spawn hello-pipe hello-vm hello-stdin hello-stream http-request hello-argv

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

http-request:
	nodejs http-request.js

hello-argv:
	nodejs hello-argv.js date -Iseconds


