import React,{Component} from 'react'
import Article from './Article'
import axios from 'axios'
import CustomForm from './Forms'

class ArticleList extends  Component{
    state = { 
        articles : []
    }

    componentDidMount(){
      let url = "http://localhost:8000/api/"
      axios.get(url).then((res)=>{
          this.setState({
              articles : res.data
          })
          console.log(res.data)
      })
    }


 render(){
        return(
            <div>
                <Article data={this.state.articles }/>
                <h2>Create the Article</h2>
                <CustomForm re/>
            </div>
        )
    } 
}

export default ArticleList;