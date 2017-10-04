import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface WeatherForecast {
    randomString: string;
    randomNumber: number;
}

@Component
export default class FetchDataComponent extends Vue {
    forecasts: WeatherForecast[] = [];

    mounted() {
        fetch('/api/Test/TestEndpoint')
            .then(response => response.json() as Promise<WeatherForecast[]>)
            .then(data => {
                this.forecasts = data;
            });
    }
}