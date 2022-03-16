import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

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
        fetch('http://localhost:3004/posts')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArticle: jsonHasilAmbilDariAPI
                })
            })
    }


    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusArticle = (data) => {
        fetch(`http://localhost:3004/posts/${data}`, { method: "DELETE" })
            .then(
                (res) => this.ambilDataDariServerAPI()
            );
    };

    handleTambahArticle = (event) => {
        let formInsertArticle = {...this.state.insertArticle};
        let timestamp = new Date().getTime();
        formInsertArticle['id'] = timestamp;
        formInsertArticle[event.target.name] = event.target.value;
        this.setState({
          insertArticle : formInsertArtcle
        })
      };

    handleTombolSimpan = () => {
        fetch('http://localhost:3004/posts', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.insertArticle)
        })
        .then((response) => {
          this.ambilDataDariServerAPI()
        })
      }

    render() {
        return (

            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" name="body" id="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArticle.map(article => {
                        return <Post key={article.id} judul={article.title} isi={article.body} idArticle={article.id} hapusArticle={this.handleHapusArticle} />
                    })
                }
            </div>
        );
    }
}
export default BlogPost;