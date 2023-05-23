import React, { useEffect } from "react";

function Maps() {
  const apiKey = process.env.REACT_APP_API_KEY;

  console.log("asd" + apiKey);
  useEffect(() => {
    const initialize = () => {
      const myLatlng = new window.google.maps.LatLng(32.9635, -117.0407);

      const myOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      };

      const map = new window.google.maps.Map(
        document.getElementById("map_canvas"),
        myOptions
      );

      const contentString =
        '<div id="content">' +
        '<div id="restNotice">' +
        "</div>" +
        '<div id="bodyContent">' +
        "<p><b>Restaurant</b></p>" +
        "</div>" +
        "</div>";

      const infowindow = new window.google.maps.InfoWindow({
        content: contentString,
      });

      const marker = new window.google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "test",
      });

      window.google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    };

    const script = document.createElement("script");
    script.src =
      "http://maps.googleapis.com/maps/api/js?key=$`{apiKey}`&sensor=true";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", initialize);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center mx-auto w-[70%]">
      <div
        className=""
        id="map_canvas"
        style={{ width: "300px", height: "300px" }}
      ></div>
    </div>
  );
}

export default Maps;
