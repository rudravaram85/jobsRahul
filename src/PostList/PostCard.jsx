import React from "react";
import { Card, Button } from "@blueprintjs/core";
import { Table } from 'reactstrap';
import data from './Data';

const PostCard = props => {

  
  //const { id,name, client, short_code,openings,candidates,interviews,status,description,created_on,updated_on } = props.post;
  const { dispatch } = props;

  const handleEdit = () => {
    // tightly coupled, but you have more control over it
    dispatch({ type: "EDIT_POST", payload: props.post });
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Job ID </th>
            <th>Job Name</th>
            <th>client name </th>
            <th>Openings </th>
            <th>Posted Date </th>
            <th>candidates</th>
            <th>Interveiws</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item, i) => {
    return [
          <tr>
            <th scope="row">1</th>
            <td>{item.client}</td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.openings}</td>
            <td>{item.openings}</td>
            <td>{item.created_on}</td>
            <td>{item.candidates}</td>
            <td>{item.interviews}</td>
            <td>{item.status}</td>

            <Button icon="edit" minimal onClick={handleEdit} />
            <Button icon="tick-circle" minimal onClick={handleEdit} />
            <Button icon="delete" minimal onClick={handleEdit} />
          </tr>
         ];
        })}
        </tbody>
      </Table>
    </>
  );
};

export default PostCard;
