using System.Collections.Generic;
using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace StarTrekDash.Models
{
  public class Weather
  {
    // public double temp { get; set; }
    public double temp { get; set; }
    // public string state_code { get; set; }
    // public string wind_cdir {get; set;}
    // public 
    public static List<Weather> get_Weather()
    {
      var apiCallTask = ApiHelper.GetAllWeather();
      var weatherResult = apiCallTask.Result;
     
      JObject jsonResponse = JsonConvert.DeserializeObject<JObject>(weatherResult);
       Console.WriteLine(jsonResponse);
       List<Weather> WeatherInfo = JsonConvert.DeserializeObject<List<Weather>>(jsonResponse["data"].ToString());
    
      // var targetWeatherData = WeatherInfo[0];

      // return WeatherInfo;
      // return targetWeatherData;
      return WeatherInfo;
    }
  }
}

