all: hello-exec hello-spawn hello-pipe hello-vm

hello-exec:
	nodejs hello-exec.js

hello-spawn:
	nodejs hello-spawn.js

hello-pipe:
	nodejs hello-pipe.js


hello-vm:
	nodejs hello-vm.js
