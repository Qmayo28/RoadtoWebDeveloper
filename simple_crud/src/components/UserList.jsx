import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              <strong style={{ marginTop: '5px' }}>{user.name}</strong>
              <div>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-warning"
                  style={{ marginLeft: '250px', border: '0' }}
                >
                  Edit
                </Link>
                <Button
                  color="danger"
                  onClick={() => removeUser(user.id)}
                  style={{ marginLeft: '2px' }}
                >
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No Users</h4>
      )}
    </ListGroup>
  );
};
