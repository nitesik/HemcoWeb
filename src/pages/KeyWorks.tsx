import styles from "../styles/KeyWorksStyles.module.css";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

// duration, assignment, name, value, role

interface Column {
  id: 'assignment' | 'value' | 'role' | 'duration' | 'name';
  label: string;
  minWidth?: number;
  align?: 'center' | "left";
  format?: (value: number) => string;
}



const columns: readonly Column[] = [
  { id: 'duration', 
    label: 'Duration',
    align: "center",
    minWidth: 100 
  },

  { id: 'assignment', 
    label: 'Assignment name/& brief description of main deliverables/outputs', 
    minWidth: 50,
    align: "left" 

  },
  {
    id: 'name',
    label: 'Name of Client & Country of Assignment',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'value',
    label: 'Approx. Contract value (in US$ equivalent)/ Amount paid to your firm',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'role',
    label: 'Role on the Assignment',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  duration: string;
  assignment: string;
  name: string;
  value: string;
  role: string;
}

function createData(
  duration: string,
  assignment: string,
  name: string,
  value: string,
  role: string
): Data {
  return { duration, assignment, name, value, role };
}

const rows = [
  // createData('India', 'IN', 1324171354, 3287263),
  // createData('China', 'CN', 1403500365, 9596961),
  // createData('Italy', 'IT', 60483973, 301340),
  // createData('United States', 'US', 327167434, 9833520),
  // createData('Canada', 'CA', 37602103, 9984670),
  // createData('Australia', 'AU', 25475400, 7692024),
  // createData('Germany', 'DE', 83019200, 357578),
  // createData('Ireland', 'IE', 4857000, 70273),
  // createData('Mexico', 'MX', 126577691, 1972550),
  // createData('Japan', 'JP', 126317000, 377973),
  // createData('France', 'FR', 67022000, 640679),
  // createData('United Kingdom', 'GB', 67545757, 242495),
  // createData('Russia', 'RU', 146793744, 17098246),
  // createData('Nigeria', 'NG', 200962417, 923768),
  // createData('Brazil', 'BR', 210147125, 8515767),
  // 9 8 1994

  createData("June 2022 to Nov. 2022", "Supply, install and commission 1 TPD Biogas plant from kitchen waste at Jigme Namgyal Engineering college (JNEC).", "WWF and JNEC", "9.4 million", "Lead firm HEMCo & JV Firm ETS-Kankyo Bert, India"),
  createData("June 2022 to June 2023", "WB funded project\n Bhutan: Strengthening Policy and Institutional Reforms for a Green and Resilient Built Environment. Project No. ECC1279391", "World Bank/Ministry of Works and Human Settlement", "3.24 million", "Lead firm: Miyamoto International and Sub consultant HEMCo"),
  createData("June 2020 to Dec. 2022", "Construction and upgradation of existing road to 2-lane with paved shoulder of Bagrakot - Kafer section of NH-717A from Km. 26.100 to Km. 40.000 on EPC basis under SARDP-NE Phase ‘Á’ in the State of West Bengal (Package-IV D) on Engineering, Procurement & Construction (EPC) Mode”.", "National Highways & Infrastructure Development Corporation Limited (NHIDCL), having its principal Office 3rd Floor, PTI Building, 4, Parliament Street, New Delhi-110001 Direct client KCL-BBPL JV", "Nu. 35.598 million", "Lead Design Consultant"),
  createData("June-Dec 2020", "Feasibility Study for Water Source & Supply System and Preparation of Detailed Project Report (DPR) for Bjemina Industrial Estate, Thimphu.", "Dept. of Industry, MoEA", "Nu. 2.70 million", "Sole Consultant"),
  createData("Jan-June 2021", "Develop a Low Emission Development (LEDS) Strategy for the Agriculture and Livestock Sector in Bhutan", "UNDP", "Nu. 0.80 million", "Sole consultant"),
  createData("March-June 2020", "Detail Investigation and Design of Pangrizampa Bridge over Wangchu at Thimphu", "Dept. of Roads, MoWHS", "Nu. 1.97 million", "Sole Consultant"),
  createData("Jan 2017 - Feb 2017", "Rapid Assessment of Vegetable and Dairy Value Chains", "CARLEP, Mongar, Bhutan", "Nu 1.7 million", "Sole Consultant"),
  createData("July 2016 - August 2016", "Develop GCF project proposal and technical feasibility study in enhancing climate resilient agriculture and food security in Bhutan", "UNDP, Bhutan", "Nu. 2.4 million", "Sole Consultant"),
  createData("Jan 2015 - June 2015", "Detailed project report for Jigmeling industrial estate, water supply and distribution system, sewage system and treatment plant.", "Dept. of Trade, MoEA, Bhutan", "Nu. 4.475 million", "Sole Consultant"),
  createData("May 2015 - Oct 2015", "Water and Wastewater master-plan for Damphu town, Tsirang, Bhutan.", "MoWHS, Bhutan", "Nu. 1.9 million", "In association with WAPCOs, India"),
  createData("Feb 2014 - June 2020", "Project Management and Supervision Consultancy (PMSC), for the construction of 81 km secondary National Highway (SNH) from Dalbari‐Dagapela, south of Bhutan funded by the Netherlands Govt. & RGoB", "DoR, MoWHS, Bhutan", "Nu. 70 million", "Lead partner in a JV with Chaitanya Projects Pvt. Ltd. (CPCL), India"),
  createData("Dec. 2010 - Aug 2011", "Gesarling- Lhamoizingkha National Highway Planning & designing, 55 KM new road with 4 bridges and 17 Km upgradation of existing feeder road under ORIO program.", "DoR, MoWHS, Bhutan", "Nu. 20.598 million", "Lead partner in a JV with Advance Consulting, Netherlands"),
  createData("Nov. 2010 - April. 2011", "Environment & Socio study of the proposed Hydropower project, Chamkharchu phase I and II", "WAPCOS, India", "Nu. 1.89 million", "Sole Consultant"),
  createData("Nov  2010 - April 2011", "Environment & Socio study of the proposed Amochu Hydropower Project, Phuentsholing", "WAPCOS, India", "Nu. 0.87 million", "Sole Consultant"),
  createData("Dec. 2012 – Dec. 2013", "Feasibility study of south East-West National Highway 346 km in association with IMC, UK &Gyeltshen Consultancy, Bhutan", "ADB", "USD 10,000 (Total project cost is USD 0.543 million)", "in association with IMC, UK &Gyeltshen Consultancy, Bhutan"),
  
];

function KeyWorks() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.firstComponent}>
        <div className={styles.innerFirstComponent}>
          <div className={styles.header}>Works executed by HEMCo</div>
          <div className={styles.table}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ maxHeight: "100%", width: "100%", verticalAlign: 'top' }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead sx={{  }}>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align="center"
                          style={{ minWidth: column.minWidth, verticalAlign: 'top', backgroundColor: "#222326", color: "white", fontSize: "1.1rem" }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.assignment}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align} style={{ verticalAlign: 'top' }}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </Paper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyWorks;