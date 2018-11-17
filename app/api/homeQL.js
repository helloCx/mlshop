import gql from "graphql-tag";

export const getCarLabelList = gql`
      query getVehiclePriceList($paginator: paginator!, $qfilter: qfilter!) {
  VehiclePriceList(paginator: $paginator, qfilter: $qfilter) {
    totalPages
    totalElements
    content {
      disabled
      financialSchemesItems {
        periods
        serveMoney
        monthly
        deposit
        downPayment
        presenter
        underName
        downPaymentRate
        id
        schemeTime
      }
      number
      createactorid
      carInfo {
        disabled
        id
        label
        model
        brand
        image
      }
      updatetime
      updateactorid
      price
      shop {
        id
      }
      schemeScanImage
      createtime
      id
    }
  }
}`;