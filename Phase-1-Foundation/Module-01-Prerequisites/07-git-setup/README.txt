// node -v
// npm -v
// git -v

//ONE-TIME setup

// user.name
git config --global user.name "Your Name"
// To Check
git config user.name

// user.email
git config --global user.email "Your Email"
// To Check
git config user.email

// Initialize a local repository
git init

// Flow 
Working Directory(edit) -> Staging Area(git add .) -> Local Repository(git commit) -> Remote Repository

// Add and commit
git add .
git commit -m "Initial Commit"

git branch -M main

git remote add origin <remote-repository-URL>

git remote -v

// Push
git push -u origin main

//Merge request (MR) / Pull request (PR)
git checkout main

git checkout -b feature/react-setup

//to confirm 
git status
git branch

git add .
git commit -m "feature: react initial setup"

git push

// then copy below cmd and paste in terminal for first time

git push --set-upstream origin feature/react/setup

// For second time simply
git push

// Steps
git checkout 
git pull origin main
git checkou -b <feature-branch>
git add .
git status
git commit -m "commit message" 
git push

//Scenario
//deleted branch
git stash
git checkout main
git pull origin main
git stash apply //merge conflict
git checkou -b <feature-branch>
git add .
git status
git commit -m "commit message" 
git push
