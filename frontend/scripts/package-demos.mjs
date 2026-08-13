import { cpSync, mkdirSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const frontendDirectory = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const demos = [
  { name: 'NÚCLEO', source: '../Projects/Gimnasio/frontend', path: 'nucleo' },
  { name: 'Casa Jarilla', source: '../Projects/Turismo/frontend', path: 'casa-jarilla' },
  { name: 'Miga', source: '../Projects/Gastronomia/frontend', path: 'miga' },
  { name: 'Lúmina', source: '../Projects/Estetica/frontend', path: 'lumina' },
  { name: 'Andina Reformas', source: '../Projects/Reformas/frontend', path: 'andina-reformas' },
]

for (const demo of demos) {
  const demoDirectory = resolve(frontendDirectory, demo.source)

  const install = spawnSync(npmCommand, ['ci', '--include=dev'], {
    cwd: demoDirectory,
    stdio: 'inherit',
  })

  if (install.status !== 0) {
    process.exit(install.status ?? 1)
  }

  const build = spawnSync(npmCommand, ['run', 'build'], {
    cwd: demoDirectory,
    stdio: 'inherit',
  })

  if (build.status !== 0) {
    process.exit(build.status ?? 1)
  }

  const destination = resolve(frontendDirectory, `dist/demos/${demo.path}`)
  mkdirSync(destination, { recursive: true })
  cpSync(resolve(demoDirectory, 'dist'), destination, {
    recursive: true,
    force: true,
  })

  console.log(`Demo ${demo.name} incluida en /demos/${demo.path}/`)
}
