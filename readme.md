# Boilerplate for JS tasks

- Includes `eslint`
- Includes `pre-commit` hooks (eslint)
- Includes `ci` (travis-ci)

Add `<name>.test.js` for each `<name>.js` and protect `master` branch.

## Requirements

`NodeJS`, `npm`, `git`

## Workflow

- Create separate branch for the solution. Name of the branch should be the same as name of your channel in slack. <br/> e.g. `git checkout -b fs_on_apr19_sasha`
- Run `npm install` to install dependencies
- Implement the solution inside function scope in `<name>.js`
- Make sure the solution works. Run tests (`npm run test`)
- Make sure the code is clean. Run eslint (`npm run lint`)
- Push code to the repository in created branch<br/> `git push origin <branch_name>`
- Create `Pull Request` from your branch to `master`
- Add your coach / TA to reviewers and send them a link of created `PR`



## Scripts
- `npm run test` - run tests specified in `<name>.test.js`
- `npm run lint` - run eslint
