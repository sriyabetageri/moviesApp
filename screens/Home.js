import React, {Component} from "react";
import{View,Text,StyleSheet,TouchableOpacity} from "react-native";
import { Header,AirbnbRating,Icon } from "react-native-elements";
import{RFValue} from "react-native-responsive-fontsize";
import axios from "axios"

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state = {
            movieDetails:{}
        }
    }

    
    componentDidMount(){
        this.getMovie();
    }

    timeConvert(num){
        var hours = Math.floor(num/60);
        var minutes = num%60;
        return `${hours} hrs ${minutes} mins`;

    }

    getMovie = () =>{
        const url = "http://localhost:5000/get-movie";
        axios
        .get(url)
        .then(response=>{
            let details = response.data.data;
            details["duration"] = this.timeConvert(details.duration);
            this.setState({movieDetails:details});
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    likedMovie = () =>{
        const url = "http://localhost:5000/liked-movie";
        axios
        .post(url)
        .then(response =>{
            this.getMovie();
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    

    unlikedMovie = () =>{
        const url = "http://localhost:5000/unliked-movie";
        axios
        .post(url)
        .then(response =>{
            this.getMovie();
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    notWatched = () =>{
        const url = "http://localhost:5000/did-not-watch";
        axios
        .post(url)
        .then(response =>{
            this.getMovie();
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    render(){
        return(
            <View style ={styles.container}>
                
            </View>
        )
    }
}