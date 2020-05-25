<template>
  <q-page>
    <q-item class="q-pa-none">
      <q-item-section avatar>
        <q-avatar>
          <q-icon name="chevron_left" @click="back" class="cursor-pointer"></q-icon>
        </q-avatar>
      </q-item-section>
      <q-item-section header class="text-h6">
        <q-item-label>
          Intervention Details
        </q-item-label>
      </q-item-section>
    </q-item>

    <template v-if="$apollo.loading">
      <q-inner-loading :showing="$apollo.loading">
        <q-spinner-facebook size="50px" color="primary"></q-spinner-facebook>
      </q-inner-loading>
    </template>



    <template v-else>
      <q-list separator bordered>
        <item-info label="ID" :value="intervention.id"></item-info>
        <item-info label="Implementing Agency" :value="intervention.operating_unit.name"></item-info>
        <item-info label="Spatial Coverage" :value="intervention.spatial_coverage.name"></item-info>
        <item-info label="Region" :value="intervention.region.name"></item-info>
        <item-info label="Province" :value="intervention.province.name"></item-info>
        <item-info label="Commodity Group" :value="intervention.commodity_group.name"></item-info>
        <item-info label="Commodity" :value="intervention.commodity.name"></item-info>
        <item-info label="Value Chain Segment" :value="intervention.value_chain_segment.name"></item-info>
        <q-item-label header>Information</q-item-label>
        <item-info label="Type" :value="intervention.intervention_type"></item-info>
        <item-info label="Intervention" :value="intervention.intervention === 'Others' ? intervention.intervention_others: intervention.intervention"></item-info>
        <item-info label="Details" :value="intervention.intervention_details"></item-info>
        <item-info label="Multi-Year?" :value="!intervention.multi_year ? 'No': 'Yes'"></item-info>
        <q-item-label header>Physical Target (in {{ intervention.unit.name }})</q-item-label>
        <item-info label="2018" :value="intervention.target_1"></item-info>
        <item-info label="2019" :value="intervention.target_2"></item-info>
        <item-info label="2020" :value="intervention.target_3"></item-info>
        <item-info label="2021" :value="intervention.target_4"></item-info>
        <item-info label="2022" :value="intervention.target_5"></item-info>
        <item-info label="2023" :value="intervention.target_6"></item-info>
        <q-item-label header>Investment Requirements</q-item-label>
        <item-info label="2018" :value="intervention.investment_1"></item-info>
        <item-info label="2019" :value="intervention.investment_2"></item-info>
        <item-info label="2020" :value="intervention.investment_3"></item-info>
        <item-info label="2021" :value="intervention.investment_4"></item-info>
        <item-info label="2022" :value="intervention.investment_5"></item-info>
        <item-info label="2023" :value="intervention.investment_6"></item-info>
        <item-info label="Total" :value="intervention.investment_total"></item-info>
        <q-item-label header>Target Municipalities</q-item-label>
        <item-info label="2018" :value="intervention.municipalities_1"></item-info>
        <item-info label="2019" :value="intervention.municipalities_2"></item-info>
        <item-info label="2020" :value="intervention.municipalities_3"></item-info>
        <item-info label="2021" :value="intervention.municipalities_4"></item-info>
        <item-info label="2022" :value="intervention.municipalities_5"></item-info>
        <item-info label="2023" :value="intervention.municipalities_6"></item-info>
        <q-item-label header>Additional Information</q-item-label>
        <item-info label="Funding Source" :value="intervention.fund_source"></item-info>
        <item-info label="Remarks" :value="intervention.remarks"></item-info>
      </q-list>
    </template>
    
  </q-page>
</template>

<script>
import { GET_INTERVENTION } from '../graphql/queries';
import ItemInfo from '../components/ItemInfo'

export default {
  components: {ItemInfo},
  name: 'InterventionDetails',
  apollo: {
		intervention: {
			query: GET_INTERVENTION,
			variables() {
				return {
					id: this.$route.params.id
				}
			}
		}
  },
  data() {
  	return {
  		intervention: {}
  	}
  },
  methods: {
    back() {
      this.$router.push('/')
    }
  }
}
</script>
