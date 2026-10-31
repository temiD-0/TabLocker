# TabLocker

An extension that allows you to store and restore named chrome windows/tabs.

## The Problem

I open a lot of tabs and even windows, but it gets very cluttered. The way that chrome organizes your history does not help either. I am trying to find a way to organize the tabs I open. While also being able to access specific windows whenever I need.

## How It Works
It first asks the user for a name for the snap shot. Then it takes all the open tabs at the time, and attaches them to the snapshot. It then stores the snapshot to a list. Which can allow it to called upo, to restore all the tabs it contains.

![System diagram](src/TabLocker(.drawio.png)

## Tech Stack

- **Language:** JavaScript, Html, and CSS.
- **Libraries:** Chrome library
- **External tools:** Chrome API's

## Setup

Step-by-step: how does someone who just cloned your repo get it
running?

```bash
git clone https://github.com/you/your-project
cd your-project
./install.sh   # or whatever
```

## Usage

How to actually run the thing, with examples.

```bash
./backup.sh ~/Documents
```

## Roadmap

- [ ] Delete snapshots from the list 
- [ ] Restore and Delete colored GUIs
- [ ] Pinning 3 snapshots to the top of the list

## Author

Temidayo Deji, https://github.com/temiD-0.
