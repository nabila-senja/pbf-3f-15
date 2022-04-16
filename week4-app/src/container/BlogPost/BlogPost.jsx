import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";
import API from "../../services/index";

class BlogPost extends Component {
    state = {
        listArticle: [],
        insertArtikel : {
            userId: 1,
            id: 1,
            title: "",
            body: ""
    }
}

    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                listArticle: result
            })
        })
    }


    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        API.deleteNewsBlog(data).then((response)=>{
          this.ambilDataDariServerAPI();
        })
      };
  

    handleTambahArticle = (event) => {
        let formInsertArticle = {...this.state.insertArticle};
        let timestamp = new Date().getTime();
        formInsertArticle['id'] = timestamp;
        formInsertArticle[event.target.name] = event.target.value;
        this.setState({
          insertArticle : formInsertArticle
        })
      };

    handleTombolSimpan = () => {
        API.postNewsBlog(this.state.insertArticle)
        .then((response) => {
          this.ambilDataDariServerAPI()
        });
      }

    render() {
        return (

            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArticle} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" name="body" id="body" rows="3" onChange={this.handleTambahArticle}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArticle.map(article => {
                        return <Post 
                        key={article.id} 
                        judul={article.title} 
                        isi={article.body} 
                        idArticle={article.id} 
                        hapusArticle={this.handleHapusArticle} />
                    })
                }
            </div>
        );
    }
}
export default BlogPost;