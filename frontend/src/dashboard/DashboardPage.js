import React from "react";
import styles from "./DashboardPage.module.scss";
import NavigationPane from "./NavigationPane";
import TickerTapeWidget from "../tradingview/TickerTapeWidget";
import HomePane from "./HomePane";
import PaneLayout from "./PaneLayout";
import BuyStockPane from "./BuyStockPane";
import ViewStockPane from "./ViewStockPane";
import LogoutPane from "./LogoutPane";

/**
 * Page that displays the dashboard. This includes the navigation pane and the
 * main content pane. The main pane can be changed depending on which navigation
 * item is selected.
 *
 * This component stores `paneIndex` in its state. This is a 0-indexed number
 * indicating which nav item to highlight and which pane to display.
 */
export default class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };
    this.onSelect = this.onSelect.bind(this);
  }

  getTickerTapeSymbols() {
    // TODO: Dummy
    return [
      {
        proName: "NASDAQ:GOOGL",
        title: "Google"
      },
      {
        proName: "NASDAQ:TSLA",
        title: "Tesla"
      },
      {
        proName: "NASDAQ:AMZN",
        title: "Amazon"
      }
    ];
  }

  /**
   * Changes which navigation item is active.
   *
   * @param {integer} i the index of the navigation item to select,
   *                    corresponding to the pane to display.
   */
  onSelect(i) {
    this.setState({ activeIndex: i });
  }

  render() {
    const navItems = ["Dashboard", "Buy a stock", "View stock info", "Logout"];
    const panes = [
      <HomePane />,
      <BuyStockPane />,
      <ViewStockPane />,
      <LogoutPane />
    ];

    return (
      <div className={styles.containerParent}>
        <div className={styles.containerNav}>
          <NavigationPane
            items={navItems}
            activeIndex={this.state.activeIndex}
            className={styles.containerNav}
            onSelect={this.onSelect}
          />
        </div>
        <main className={styles.containerMain}>
          <TickerTapeWidget symbols={this.getTickerTapeSymbols()} />
          <div className={styles.containerPanes}>
            <PaneLayout>{panes[this.state.activeIndex]}</PaneLayout>
          </div>
        </main>
      </div>
    );
  }
}
