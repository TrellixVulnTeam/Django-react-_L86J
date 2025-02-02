


import React,{Component} from 'react'
import Article from 'an'
import axios from 'axios'


class ArticleList extends  Component{
    state ={ 
        article : {}
    }

    componentDidMount(){
      let articleId = this.props.match.params.articleId;
      let url = `http://localhost:8000/api/{}`
      axios.get(url).then((res)=>{
          this.setState({
              article : res.data
          })
          console.log(res.data)
      })
    }


 render(){
        return(
            <div>
                <Article data={this.state.articles }/>
            </div>
        )
    } 
}

export default ArticleList;