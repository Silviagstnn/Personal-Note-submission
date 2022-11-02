import React from "react";
import { Navigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import NoteItem from "../components/NoteItem";
import {deleteNote, getNote } from "../utils/index";

function DetailPageWrapper() {
    const navigate = useNavigate();
    const { id } = useParams();
    

    function homeNavigate(){
        navigate('/')
    }
    return <DetailPage id={(id)} navigate = {homeNavigate}/>;
  }

class DetailPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            note : getNote(props.id)
        }
        this.onDeleteClickHandler = this.onDeleteClickHandler.bind(this);
    }
    onDeleteClickHandler(id){
        deleteNote(id);

        const {navigate} = this.props;
        navigate();
    }


    render(){
        if(this.state.note === null){
            return <p>Catatan tidak tersedia</p>;
        }

        return(
            <section>
                <NoteItem {...this.state.note} onDelete={this.onDeleteClickHandler}/>
            </section>
        );
    }

   
}
DetailPage.propTypes ={
    id: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
}

export default DetailPageWrapper;