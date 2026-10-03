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
