import YearLinks from '../../components/YearLinks';
function Gender() {
  return (
    <>
      <div>
        <h1>Top 100 Baby Boys Names in 2021</h1>
        <div className="Row">
          <div className="Column">
            <table>
              <tr><td>1. NAME</td></tr>
              <tr><td>2. NAME</td></tr>
              <tr><td>3. NAME</td></tr>
              <tr><td>4. NAME</td></tr>
              <tr><td>5. NAME</td></tr>
              <tr><td>6. NAME</td></tr>
              <tr><td>7. NAME</td></tr>
              <tr><td>8. NAME</td></tr>
              <tr><td>9. NAME</td></tr>
              <tr><td>10. NAME</td></tr>
            </table>
          </div>
          <div className="Column">
            <table>
              <tr><td>11. NAME</td></tr>
              <tr><td>12. NAME</td></tr>
              <tr><td>13. NAME</td></tr>
              <tr><td>14. NAME</td></tr>
              <tr><td>15. NAME</td></tr>
              <tr><td>16. NAME</td></tr>
              <tr><td>17. NAME</td></tr>
              <tr><td>18. NAME</td></tr>
              <tr><td>19. NAME</td></tr>
              <tr><td>20. NAME</td></tr>
            </table>
            <a href="/year/gender/">View All</a>
          </div>
        </div>
      </div>
      <div>
      <div>
        <h2>Top 100 Boys Names By Year</h2>
        <YearLinks />
      </div>
        <h2>Top 100 Baby Names By Year</h2>
        <YearLinks />
      </div>
      <div>
        <h2>Top 100 Girls Names By Year</h2>
        <YearLinks />
      </div>
      
    </>
  );
}

export default Gender;