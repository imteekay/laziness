import React, { Fragment } from 'react';

export const Form = () => (
  <Fragment>
    <h1>Form</h1>

    <form>
      <div>
        <label>Name:</label>
        <input id="name" name="name" placeholder="Ex: TK" />
      </div>

      <div>
        <label>Age:</label>
        <input id="age" name="age" type="number" />
      </div>

      <div>
        <label>Birthday:</label>
        <input id="birthday" name="birthday" type="date" />
      </div>

      <div>
        Hobbies:

        <input type="checkbox" name="hobbie1" id="hobbie1" value="coding" />
        <label htmlFor="hobbie1">Coding</label>

        <input type="checkbox" name="hobbie2" id="hobbie2" value="reading" />
        <label htmlFor="hobbie2">Reading</label>

        <input type="checkbox" name="hobbie3" id="hobbie3" value="writing" />
        <label htmlFor="hobbie3">Writing</label>
      </div>

      <div>
        OS:

        <input type="radio" name="os1" id="os1" value="windows" />
        <label htmlFor="os1">Windows</label>

        <input type="radio" name="os2" id="os2" value="mac" />
        <label htmlFor="os2">Mac</label>

        <input type="radio" name="os3" id="os3" value="linux" />
        <label htmlFor="os3">Linux</label>
      </div>

      <div>
        <label>Favorite city?</label>
        <select id="favcity" name="favcity">
          <option value="1">Amsterdam</option>
          <option value="2">Hong Kong</option>
          <option value="3">London</option>
          <option value="4">New York</option>
          <option value="5">Sao Paulo</option>
          <option value="6">Tokyo</option>
        </select>
      </div>

      <div>
        <label>Countries you want to visit</label>
        <div>
          <select id="countries" name="countries" multiple>
            <option value="Brazil">Brazil</option>
            <option value="Japan">Japan</option>
            <option value="New Zealand">Italy</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="Netherlands">Netherlands</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        data-testid="submit-button"
      >
        Submit
      </button>
    </form>
  </Fragment>
);
