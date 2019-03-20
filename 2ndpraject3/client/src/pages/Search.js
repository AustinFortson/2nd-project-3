//import React from 'react';
//import API from "../utils/API";
//class Search extends React.Component {
//  constructor(props){
//    super(props)
//    this.state = {
//      tools:[],
//      catergory:"",
//      name:"",
//      subclass:"",
//      four_hour:"",
//      daily:"",
//      weekly:"",
//      deposit:""
//    }
//    this.handleChange = this.handleChange.bind(this);
//    console.log(this.state);
//  }
//  componentDidMount(){
//    this.getTools();
//  }
//  getTools = () => {
//    API.getTools()
//    .then(res => this.setState({tools: res.data, catergory:"", name:"", subclass:"", four_hour:"", daily:"", ///weekly:"", deposit:""}))
//    .catch(err => console.log(err))
//  }
//  handleChange(event) {
//    const {name,value}  = event.target;
//    this.setState({[name]: value})
//  }
//
//  render() {
//    return(
//      <div>
//       <h1>Search</h1>
//       {/* Displays the Search */}
//       <div className="SearchBar">
//       <form>
//         <input type="text" placeholder="Search here .." name="search"/>
//         <button type="submit"><i className="fa fa-search"></i></button>
//       </form>
//       </div>
//       
//      </div>
//       )
//  }
//};
//
//
//export default Search;
//////////////////////////////////////////////////////////////////////////
//////////////////              IMPORTS            //////////////////////
////////////////////////////////////////////////////////////////////////
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import PaymentIcon from '@material-ui/icons/Payment';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import API from "../utils/API";
import "./index.css";
import Gallery from "../components/gallery/index"


let counter = 0;
function createData(name, catagory, four_hour, daily, deposit) {
  counter += 1;
  return { id: counter, name, catagory, four_hour, daily, deposit };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'catagory', numeric: false, disablePadding: false, label: 'Catagory' },
  { id: 'four_hours', numeric: true, disablePadding: false, label: '4 Hours' },
  { id: 'daily', numeric: true, disablePadding: false, label: '24 hours' },
  { id: '2_days', numeric: true, disablePadding: false, label: '2 Days' },
  { id: 'deposit', numeric: true, disablePadding: false, label: 'Deposit' },
];


class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead id="tableHead">
        <TableRow>
          <TableCell padding="checkbox">
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar id="Toolbar"
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title} id="selectedSubtitle">
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
</Typography>
        ) : (
            <Typography variant="h6" id="toolsForRent" >
              <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/the-home-depot-1-logo.png" id="homeDepotIcon" alt=""></img>
              Tools For Rent
</Typography>
          )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions} >
        {numSelected > 0 ? (
          <Tooltip title="Payment">
            <IconButton aria-label="Payment">
              <PaymentIcon />
            </IconButton>
          </Tooltip>
        ) : (
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'catagory',
    selected: [],
    data: [
      createData('Bolt Cutter 36"', "Cutting and Concrete", 8, 12, 25),
      createData('Bull Float', "Cutting and Concrete", 12, 17, 259),
      createData('11 LB Demolition Hammer', "Drills and Hammers", 16, 24, 6),
      createData("18V Cordless Drill", "Drills and Hammers", 6, 24, 4),
      createData('3000 Watt Generator', "Generators", 16, 49, 3),
      createData('6500 Watt Generator', "Generators", 3, 87, 6),
      createData('Auto-Feed Drain Cleaner 100 x 5/8', "Plumbing and Pumps", 9, 37, 4),
      createData('Auto-Feed Drain Cleaner 50 x 1/2', "Plumbing and Pumps", 0, 94, 0),
      createData('20V Brad Nailer', "Fastening and Welding", 26, 65, 7),
      createData('20V Finish Nailer', "Fastening and Welding", 2, 98, 10),
      createData('Jumping Jack', "Compactors", 52, 81, 2),
      createData('Manual Tamper', "Compactors", 19, 9, 37),
      createData('20V Cordless Paint Sprayer', "Painting and Decorating", 18, 63, 4),
      createData('Electric Wallpaper Steamer', "Painting and Decorating", 18, 63, 4),
      createData('1 Man Auger', "Lawn and Garden", 0, 81, 2),
      createData('13in Landscape Trencher', "Lawn and Garden", 19, 9, 37),
      createData('Belt Sander', "Floor Care and Sanding", 18, 63, 4),
      createData('Carpet Blower', "Floor Care and Sanding", 18, 63, 4),
      createData('150K-200K BTU Kerosene Heater', "Other", 16, 24, 6),
      createData("18in Trencher Mechanical", "Other", 6, 24, 5),
      createData('10 high w/base plates-1 5/8', "Scaffolding", 16, 49, 3),
      createData('10 high w/casters -1 5/8', "Scaffolding", 3, 87, 6)
    ],
    page: 0,
    rowsPerPage: 10,
    cartitem:[]
  };


  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleCart = () => {
    let newcart = []
    if(!this.state.selected){
      this.setState({cartitem:''})
    }
    if(this.state.selected.length < this.state.cartitem.length){
      this.setState({cartitem:''})
    }
    
    this.state.data.map(n=>{
      for(var i=0;i<this.state.selected.length;i++)
      if(n.id=== this.state.selected[i]){
        newcart.push(n)
      }
    })
    
    this.setState({cartitem: newcart})
    console.log(this.state.cartitem)
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1;


  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    data.map(n=>{

      for(var i=0;i<selected.length;i++)
      if(n.id=== selected[i]){
        console.log(n)

      }
    })
    return (
      <div id="wholeRentalSearch">
        <Paper className={classes.root} id="Paper">
          <EnhancedTableToolbar numSelected={selected.length} />
          <div className="search">
            <SearchIcon id="searchIcon" />
            <input type="text" id="searchField" onChange={function searchFunction() {
              // Declare variables 
              var input, filter, table, tr, th, i, txtValue;
              input = document.getElementById("searchField");
              filter = input.value.toUpperCase();
              table = document.getElementById("tableBody");
              tr = table.getElementsByTagName("tr");

              // Loop through all table rows, and hide those who don't match the search query
              for (i = 0; i < tr.length; i++) {
                th = tr[i].getElementsByTagName("th")[0];
                if (th) {
                  txtValue = th.textContent || th.innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                  } else {
                    tr[i].style.display = "none";
                  }
                }
              }
            }} placeholder="Search for tools ex. 'Lawn Mower'...">
            </input>
          </div>
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle" id="table">
              <EnhancedTableHead id="tableHead"
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={this.handleSelectAllClick}
                onRequestSort={this.handleRequestSort}
                rowCount={data.length}
              />
              <TableBody id="tableBody">
                {stableSort(data, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(n => {
                    const isSelected = this.isSelected(n.id);
                    return (
                      <TableRow id="tableRow"
                        hover
                        onClick={event => this.handleClick(event, n.id)}
                        role="checkbox"
                        aria-checked={isSelected}
                        tabIndex={-1}
                        key={n.id}
                        selected={isSelected}
                      >
                        <TableCell padding="checkbox" id="checkbox">
                          <Checkbox checked={isSelected} id="checkedBox" />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          {n.name}
                        </TableCell>
                        <TableCell align="left">{n.catagory}</TableCell>
                        <TableCell align="right">{"$" + n.four_hour + ".00"}</TableCell>
                        <TableCell align="right">{"$" + n.daily + ".00"}</TableCell>
                        <TableCell align="right">{"$" + n.daily * 2 + ".00"}</TableCell>
                        <TableCell align="right">{"$" + n.deposit + ".00"}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination id="tablePagination"
            rowsPerPageOptions={[10, 15, 20, 25, 50]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
        <div id="wholeGallery">
          <Gallery>
            <div id="gallery">
              <hr></hr>
              <img src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/Tool_and_Truck_Rental/outdoor-tool-rental-baked-sub-hero.jpg" alt="outdoorTool" height="30%" width="50%"></img>
              <img src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/Tool_and_Truck_Rental/indoor-tool-rental-baked-sub-hero.jpg" alt="indoorTool" height="30%" width="50%"></img>
              <hr></hr>

              <ul id="links">
                <li id="find"><a href="https://www.homedepot.com/l/search/3602/full/">
                  | Find a Store |
                </a>
                </li>
                <li id="find"><a href="https://www.homedepot.com/c/tool_and_truck_rental">
                  | More Tool Info |
                </a>
                </li>
                <li id="find"><a href="https://www.homedepot.com/tool-truck-rental/used-tools/index.html">
                  | Used Tools For Sale |
                </a>
                </li>
                <li id="find"><a href="https://www.homedepot.com/c/Tool_Rental_FAQ">
                  | Tool Rental FAQ |
                </a>
                </li>
              </ul>
            </div>

          </Gallery>
        </div>
        <button onClick={this.handleCart}>submit</button>
      </div>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};





export default withStyles(styles)(EnhancedTable);
