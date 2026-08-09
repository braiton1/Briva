import { spawn } from 'node:child_process'

const children = [
  spawn(process.execPath, ['server.mjs'], { stdio: 'inherit' }),
  spawn('npm', ['exec', 'vite'], { stdio: 'inherit' }),
]

function stop() {
  for (const child of children) child.kill('SIGTERM')
}

process.on('SIGINT', stop)
process.on('SIGTERM', stop)

for (const child of children) {
  child.on('exit', (code) => {
    if (code && code !== 0) process.exitCode = code
  })
}
