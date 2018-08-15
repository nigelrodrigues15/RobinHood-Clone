import React from "react";
import { Link, withRouter } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.watchlists = this.watchlists.bind(this);
  }

  componentDidMount() {
    this.props.showWatchlist();
  }

  selectCompany(companyId) {
    if (companyId === undefined) {
      return null;
    }

    return () => {
      this.props.history.push(`/company/${companyId}`);
    };
  }

  watchlists() {
    if (this.props.watchlists.length === 0) return null;
    if (Object.keys(this.props.companies).length === 0) return null;
    // debugger;
    let result = this.props.watchlists.map((watchlist, i) => {
      return (
        <li
          key={i}
          onClick={this.selectCompany(watchlist.company_id)}
          className="watchlist-company"
        >
          <p>{this.props.companies[watchlist.company_id].symbol}</p>
        </li>
      );
    });
    return result;
  }

  render() {
    // if (this.props.company === undefined) return null;
    return (
      <div className="dashboard">
        <div className="dashboard-watchlists">
          <ul>{this.watchlists()}</ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);