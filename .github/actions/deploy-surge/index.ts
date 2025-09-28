import * as core from "@actions/core"
import * as exec from "@actions/exec"

async function main() {

  // npx surge --token def9546502e65ae77e7ee009d8165821 --login poporingieie@gmail dist poporing.surge.sh

  // 1 token
  const token = core.getInput("token", {
    required: true,
    trimWhitespace: true
  })
  // 2 email
  const email = core.getInput("email", {
    required: true,
    trimWhitespace: true
  })
  // 3 dist folder
  const distFolder = core.getInput("dist-folder", {
    required: true,
    trimWhitespace: true
  })
  // 4 domain .surge.sh
  const domain = core.getInput("domain", {
    required: true,
    trimWhitespace: true
  })

  return exec.exec(`npx surge --token ${token} --login ${email} ${distFolder} ${domain}`)
}

main()