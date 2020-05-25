<template>
  <q-page>
  	<q-item class="q-pa-none">
  		<q-item-section avatar>
  			<q-avatar>
  				<q-icon name="list"></q-icon>
  			</q-avatar>
  		</q-item-section>
  		<q-item-section header class="text-h6">
  			<q-item-label>
  				Interventions
  			</q-item-label>
  		</q-item-section>
  	</q-item>
  	

  	<template v-if="$apollo.loading">
      <q-inner-loading :showing="$apollo.loading">
        <q-spinner-facebook size="50px" color="primary"></q-spinner-facebook>
      </q-inner-loading>
    </template>

    <template v-else>

    	<q-list bordered separator>
	  		<q-item v-for="intervention in interventions.data" :key="intervention.id" clickable :to="`/${intervention.id}`">
	  			<q-item-section>
	  				<q-item-label :lines="2">
	  					<span class="text-weight-bold">
	  					[{{ intervention.operating_unit ? intervention.operating_unit.name : '' }}] - </span>
	  					{{ intervention.intervention }}
	  				</q-item-label>
	  				<q-item-label caption :lines="2">
	  					{{ intervention.intervention_details }}
	  				</q-item-label>
	  			</q-item-section>
	  			<q-item-section side>
	  				<q-item-label>
	  					{{ intervention.investment_total | money }}
	  				</q-item-label>
	  			</q-item-section>
	  			<q-item-section side>
	  				<q-btn flat round dense icon="chevron_right"></q-btn>
	  			</q-item-section>
	  		</q-item>
	  	</q-list>

	  	<div class="q-pa-lg flex flex-center">
		    <q-pagination
		      v-model="currentPage"
		      :max="lastPage"
		      :input="true"
		    >
		    </q-pagination>
		  </div>

    </template>
  	
  </q-page>
</template>

<script>
import { GET_INTERVENTIONS } from '../graphql/queries'

export default {
  name: 'PageIndex',
  apollo: {
  	interventions: {
  		query: GET_INTERVENTIONS,
  		variables() {
  			return {
  				page: this.currentPage,
  				first: 10
  			}
  		},
  		result({ data }) {
  			console.log(data)
  			this.currentPage = data.interventions.paginatorInfo.currentPage
  			this.lastPage = data.interventions.paginatorInfo.lastPage
  		}
  	}
  },
  data() {
  	return {
  		currentPage: 1,
  		lastPage: 1,
  		interventions: {}
  	}
  },
  filters: {
  	money(val) {
  		if (!val) {
  			return 0
  		}
  		return val.toLocaleString()
  	}
  }
}
</script>
