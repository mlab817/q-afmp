import gql from 'graphql-tag'

export const GET_INTERVENTIONS = gql`
	query interventions($first: Int!, $page: Int) {
		interventions(first: $first, page: $page) {
			data {
				id
				intervention
				intervention_details
				operating_unit {
					id
					name
				}
				investment_total
			}
			paginatorInfo {
				total
				currentPage
				lastPage
			}
		}
	}
`;

export const GET_INTERVENTION = gql`
	query intervention($id: ID!) {
		intervention(id: $id) {
			id
			operating_unit {
				id
				name
			}
			spatial_coverage {
				id
				name
			}
			region {
				id
				name
			}
			province {
				id
				name
			}
			commodity_group {
				id
				name
			}
			commodity {
				id
				name
			}
			value_chain_segment {
				id
				name
			}
			multi_year
			unit {
				id
				name
			}
			intervention_type
			intervention
			intervention_others
			intervention_details
			operating_unit {
				id
				name
			}
			target_1
			target_2
			target_3
			target_4
			target_5
			target_6
			investment_1
			investment_2
			investment_3
			investment_4
			investment_5
			investment_6
			investment_total
			municipalities_1
			municipalities_2
			municipalities_3
			municipalities_4
			municipalities_5
			municipalities_6
			fund_source
			remarks
		}
	}
`;