import React from 'react';
import Media from './media';
import Play from '../../icons/components/play';

// class Playlist extends Component {
//   render() {
//     const playlist = this.props.data.categories[0].playlist
//     console.log(this.props.data);
//     return(
//       <div>
//         {
//           playlist.map((item)=>{
//             return <Media {...item} key={item.id}/>
//           })
//         }
//       </div>
//     )
//   }
// }
function Playlist (props) {

    const playlist = props.data.categories[0].playlist
    console.log(props.data);
    return(
      <div className="Playlist">
        <Play />
        {
          playlist.map((item)=>{
            return <Media {...item} key={item.id}/>
          })
        }
      </div>
    )

}

export default Playlist;
