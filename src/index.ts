// _IRIM_PROJECT_NAME_
// @author _IRIM_AUTHOR_ <_IRIM_EMAIL_>
// @create _IRIM_GMT_CREATE_

import { VERSION } from './const';
import { EventEmitter } from 'events';
import { PersonProps } from './interfaces';

export default class Person extends EventEmitter {
  static version = VERSION;

  private _name: string = null;

  constructor(props: PersonProps = {}) {
    super();

    this._name = props.name;
  }

  getName(): string {
    return this._name;
  }

  async work(): Promise<number> {
    return await Promise.resolve(1);
  }
}
