import React from 'react';

const ListMovies = (props) => {

    const listview = ({datalist}) => {
        if (datalist){
            return datalist.map((item) => {
              return(
              <div key= {item.id}>{item.name}</div>
              )
            })
          }
    }
    return (
        <div>
            {listview(props)}
        </div>
    )
}

export default ListMovies;