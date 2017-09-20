* {
  margin:0px;
  padding:0px;
  font-family:sans-serif;
}

#sidebar {
  position:fixed;
  width:200px;
  height:100%;
  background:#151719;
  left:-200px;
} 
#sidebar.active {
  left:0px;
}
  #sidebar ul li {
    color:rgba(100,100,100,0.9);
    list-style:none;
    padding:15px 10px;
    border-bottom:1px solid rgba(100,100,100,0.3);
  }

#sidebar .toggle-btn {
  position:absolute;
  left:230px;
  top:20px;
}

#sidebar .toggle-btn span {
  display:block;
  width:30px;
  height:5px;
  background:#151719;
  margin:3px 0px;
}
