datagrid
<template>
    <div>
      <DxDataGrid
        :data-source="employees"
        :selected-row-keys="selectedRowKeys"
        :selection="{ mode: 'single' }"
        :show-borders="true"
        :hover-state-enabled="true"
        key-expr="ID"
        @selection-changed="onSelectionChanged"
      >
      <DxHeaderFilter :visible="true" />
        <DxColumn
          :width="70"
          data-field="Prefix"
          caption="Title"
          :allow-header-filtering="false"
        />
        <DxColumn data-field="FirstName"/>
        <DxColumn data-field="LastName"/>
        <DxColumn
          :width="180"
          data-field="Position"
        />
        <DxColumn
          data-field="BirthDate"
          data-type="date"
        />
        <DxColumn
          data-field="HireDate"
          data-type="date"
        />
      </DxDataGrid>
      <div
        v-if="showEmployeeInfo"
        id="employee-info"
      >
        <img
          :src="selectedRowPicture"
          class="employee-notes"
        >
        <p class="employee-notes">{{ selectedRowNotes }}</p>
      </div>

    </div>
  </template>
  <script>
  import { DxDataGrid, DxColumn, DxHeaderFilter } from 'devextreme-vue/data-grid';
  import { employees } from '../data.js';
  
  export default {
    components: {
      DxDataGrid,
      DxColumn,
      DxHeaderFilter
    },
    data() {
      return {
        showEmployeeInfo: false,
        selectedRowNotes: '',
        selectedRowPicture: '',
        employees,
      };
    },
    methods: {
      onSelectionChanged({ selectedRowsData }) {
        const data = selectedRowsData[0];
  
        this.showEmployeeInfo = !!data;
        this.selectedRowNotes = data && data.Notes;
        this.selectedRowPicture = data && data.Picture;
      },
    },
  };
  </script>
  <style scoped>
  #employee-info .employee-photo {
    height: 100px;
    float: left;
    padding: 20px;
  }
  
  #employee-info .employee-notes {
    padding-top: 20px;
    text-align: justify;
  }
  
  .dark #employee-info .employee-notes {
    color: rgb(181, 181, 181);
  }

  .image-v {
    margin-top: -30px;
  }
  </style>