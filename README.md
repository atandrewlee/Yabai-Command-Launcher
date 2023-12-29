# Yabai

Run commands using [Yabai](https://github.com/koekeishiya/yabai) window manager.

## Installation
1. Make sure you have [`yabai`], [`jq`](https://jqlang.github.io/jq/) packages installed. Follow the install instructions given below.
- Option 1: Install manually
    - [Yabai Install Instructions](https://github.com/koekeishiya/yabai/wiki/Installing-yabai-(latest-release))
    - [jq install instructions](https://github.com/jqlang/jq)
- Option 2: Use [`homebrew`](https://brew.sh/)
    - `brew install koekeishiya/formulae/yabai`
    - `brew install jq`

> NOTE: For yabai installation, it is recommended to ["Disable System Integrity Protection"](https://github.com/koekeishiya/yabai/wiki/Disabling-System-Integrity-Protection).

2. Look to Raycast instructions to [install an extension](https://developers.raycast.com/basics/install-an-extension).

3. Setup preferences
When opening a command for the first time, it will prompt you to fill out two text fields.

- Location of jq CLI JSON processor
    - How to find this?: `which jq`
- USER env variable
    - How to find this?: `echo $USER`



## Commands
### Switch Space
Switch to a new space

### Rename Space
Rename a space with a new label

### Create Space
Creates a new space & moves to the end


### Delete Space
Deletes the current space and goes to space 1

