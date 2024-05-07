/// <reference types='codeceptjs' />

const computersPage = require('./pages/computersPage');
const newComputerPage = require('./pages/newComputerPage');
const editComputerPage = require('./pages/editComputerPage');

type StepsFile = typeof import('./steps_file');
type ComputersPage = typeof computersPage;
type NewComputerPage = typeof newComputerPage;
type EditComputerPage = typeof editComputerPage;

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    computersPage: ComputersPage;
    newComputerPage: NewComputerPage;
    editComputerPage: EditComputerPage;
  }
  interface Methods extends Playwright {}
  interface I extends ReturnType<StepsFile> {}
  namespace Translation {
    interface Actions {}
  }
}
