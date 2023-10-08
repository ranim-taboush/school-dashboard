import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Edit,
  Sort,
  Filter,
  Group,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { levelsGrid, levelsData } from "../data/dummy";
import { Header } from "../components";

const Levels = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-4 md:p-10 bg-white rounded-3xl">
      <Header category="صفحة" title="الدروس" />
      <GridComponent
        dataSource={levelsData}
        allowPaging
        allowSorting
        allowFiltering
        allowGrouping
        pageSettings={{ pageSize: 10 }}
        toolbar={["Add", "Edit", "Delete"]}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
          allowAdding: true,
          mode: "Dialog",
          showDeleteConfirmDialog: true,
        }}
        width="auto"
      >
        <ColumnsDirective>
          {levelsGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject
          services={[Page, Toolbar, Selection, Edit, Sort, Filter, Group]}
        />
      </GridComponent>
    </div>
  );
};

export default Levels;
