import React from "react";
import { useSearchParams } from 'react-router-dom';
import PropTypes from "prop-types";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { deleteNote, getAllNote } from "../utils/index";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
   
    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  }

class HomePage extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            notes : getAllNote(),
            keyword : props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id){
        deleteNote(id);

        this.setState(()=> {
            return{
                notes : getAllNote(),
            }
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
          return {
            keyword,
          }
        });

        this.props.keywordChange(keyword);
      }

    render(){
        const notes = this.state.notes.filter((note) =>{
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return(
            <section>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h2>Daftar Note</h2>
                <NoteList notes={notes} onDelete = {this.onDeleteHandler} />
            </section>
        )
    }
}

HomePage.propTypes = {
    defaultKeyword : PropTypes.string,
    keywordChange : PropTypes.func.isRequired,
}

export default HomePageWrapper;