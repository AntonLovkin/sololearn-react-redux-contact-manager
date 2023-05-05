import React from 'react';
import { connect } from 'react-redux';
import { deletePerson } from '../actions';

function PeopleList(props) {
  const arr = props.contacts;

  const deletePrsn = (e) => {
    const text = e.currentTarget.parentNode.textContent;
    const person = text.slice(0, text.length - 1);
    props.deletePerson(person);
  };

  const listItems = arr.map((val, index) => (
    <li
      key={index}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '300px',
      }}
    >
      {val}
      <button
        style={{
          marginLeft: '10px',
          borderRadius: '50%',
          borderColor: 'grey',
          cursor: 'pointer',
        }}
        onClick={deletePrsn}
      >
        x
      </button>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}

const mapDipatchToProps = {
  deletePerson,
};

export default connect(mapStateToProps, mapDipatchToProps)(PeopleList);
