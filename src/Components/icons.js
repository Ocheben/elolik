import React from 'react';
import { View } from 'react-native';
import Svg, {
  G, Path, LinearGradient, Stop, Polygon
} from 'react-native-svg';

export const BackArrow = (props) => {
  const { style, color } = props;
  return (
    <View style={style}>
      <Svg
        fill={color}
        width={30}
        height={30}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 477.175 477.175"
      >
        <G>
          <Path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
          />
        </G>
      </Svg>
    </View>
  );
};


export const ArrowForward = (props) => {
  const { style, color } = props;
  return (
    <View>
      <Svg
        fill={color}
        width={30}
        height={30}
        style={style}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
      >
        <Path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083
            l141.792,141.792H10.667C4.771,245.333,0,250.104,0,256c0,5.896,4.771,10.667,10.667,10.667h464.917L333.792,408.458
            c-4.167,4.167-4.167,10.917,0,15.083c2.083,2.083,4.813,3.125,7.542,3.125s5.458-1.042,7.542-3.125l160-160
            C513.042,259.375,513.042,252.625,508.875,248.458z"
        />
        <LinearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-43.8903" y1="640.6307" x2="-24.0883" y2="631.4013" gradientTransform="matrix(21.3333 0 0 -21.3333 996.3334 13791.667)">
          <Stop offset="0" />
          <Stop offset="1" />
        </LinearGradient>
        <Path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0
            c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792H10.667C4.771,245.333,0,250.104,0,256c0,5.896,4.771,10.667,10.667,10.667
            h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083c2.083,2.083,4.813,3.125,7.542,3.125s5.458-1.042,7.542-3.125l160-160
            C513.042,259.375,513.042,252.625,508.875,248.458z"
        />
      </Svg>
    </View>
  );
};

export const HomeIcon = (props) => {
  const { style, color, size } = props;
  return (
    <View>
      <Svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        fill={color}
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        width={size || 30}
        height={size || 30}
      >
        <G>
          <G>
            <Path d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064
               c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57
               c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"
            />
          </G>
        </G>
        <G>
          <G>
            <Path d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52
               s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053
               c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89
               c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024
               c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847
               C455.549,238.499,449.593,232.543,442.246,232.543z"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};


export const GridIcon = (props) => {
  const { style, color, size } = props;
  return (
    <View>
      <Svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
        viewBox="0 0 512 512"
      >
        <G>
          <G>
            <Path d="M176.792,0H59.208C26.561,0,0,26.561,0,59.208v117.584C0,209.439,26.561,236,59.208,236h117.584
           C209.439,236,236,209.439,236,176.792V59.208C236,26.561,209.439,0,176.792,0z M196,176.792c0,10.591-8.617,19.208-19.208,19.208
           H59.208C48.617,196,40,187.383,40,176.792V59.208C40,48.617,48.617,40,59.208,40h117.584C187.383,40,196,48.617,196,59.208
           V176.792z"
            />
          </G>
        </G>
        <G>
          <G>
            <Path d="M452,0H336c-33.084,0-60,26.916-60,60v116c0,33.084,26.916,60,60,60h116c33.084,0,60-26.916,60-60V60
           C512,26.916,485.084,0,452,0z M472,176c0,11.028-8.972,20-20,20H336c-11.028,0-20-8.972-20-20V60c0-11.028,8.972-20,20-20h116
           c11.028,0,20,8.972,20,20V176z"
            />
          </G>
        </G>
        <G>
          <G>
            <Path d="M176.792,276H59.208C26.561,276,0,302.561,0,335.208v117.584C0,485.439,26.561,512,59.208,512h117.584
           C209.439,512,236,485.439,236,452.792V335.208C236,302.561,209.439,276,176.792,276z M196,452.792
           c0,10.591-8.617,19.208-19.208,19.208H59.208C48.617,472,40,463.383,40,452.792V335.208C40,324.617,48.617,316,59.208,316h117.584
           c10.591,0,19.208,8.617,19.208,19.208V452.792z"
            />
          </G>
        </G>
        <G>
          <G>
            <Path d="M452,276H336c-33.084,0-60,26.916-60,60v116c0,33.084,26.916,60,60,60h116c33.084,0,60-26.916,60-60V336
           C512,302.916,485.084,276,452,276z M472,452c0,11.028-8.972,20-20,20H336c-11.028,0-20-8.972-20-20V336c0-11.028,8.972-20,20-20
           h116c11.028,0,20,8.972,20,20V452z"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};
export const SearchIcon = (props) => {
  const { style, color, size } = props;
  return (
    <View>
      <Svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 451 451"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
      >
        <G>
          <Path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3
       s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4
       C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3
       s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"
          />
        </G>
      </Svg>

    </View>
  );
};


export const CartIcon = (props) => {
  const { style, color, size } = props;
  return (
    <View>
      <Svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
        viewBox="0 0 512 512"
      >
        <G>
          <G>
            <Path d="M509.867,89.6c-2.133-2.133-4.267-4.267-8.533-4.267H96L85.333,29.867c0-4.267-6.4-8.533-10.667-8.533h-64
           C4.267,21.333,0,25.6,0,32c0,6.4,4.267,10.667,10.667,10.667h55.467l51.2,260.267c6.4,34.133,38.4,59.733,72.533,59.733H435.2
           c6.4,0,10.667-4.267,10.667-10.667c0-6.4-4.267-10.667-10.667-10.667H192c-17.067,0-34.133-8.533-42.667-23.467L460.8,275.2
           c4.267,0,8.533-4.267,8.533-8.533L512,96C512,96,512,91.733,509.867,89.6z M450.133,256l-311.467,40.533l-38.4-192H486.4
           L450.133,256z"
            />
          </G>
        </G>
        <G>
          <G>
            <Path d="M181.333,384C151.467,384,128,407.467,128,437.333c0,29.867,23.467,53.333,53.333,53.333
           c29.867,0,53.333-23.467,53.333-53.333C234.667,407.467,211.2,384,181.333,384z M181.333,469.333c-17.067,0-32-14.934-32-32
           s14.933-32,32-32c17.067,0,32,14.934,32,32S198.4,469.333,181.333,469.333z"
            />
          </G>
        </G>
        <G>
          <G>
            <Path d="M394.667,384c-29.867,0-53.333,23.467-53.333,53.333c0,29.867,23.467,53.333,53.333,53.333
           c29.867,0,53.333-23.467,53.333-53.333C448,407.467,424.533,384,394.667,384z M394.667,469.333c-17.067,0-32-14.934-32-32
           s14.933-32,32-32c17.067,0,32,14.934,32,32S411.733,469.333,394.667,469.333z"
            />
          </G>
        </G>
      </Svg>


    </View>
  );
};

export const AvatarIcon = (props) => {
  const { style, color, size } = props;
  return (
    <View>
      <Svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 482.9 482.9"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
      >
        <G>
          <G>
            <Path d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5
           c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6
           c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2z
            M164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4
           c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0
           c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"
            />
            <Path d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3
           c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7
           c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41
           c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56
           c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8
           c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3
           c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3
           C447,415.5,446.9,388.8,446.8,383.6z"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};

export const MenuIcon = (props) => {
  const { style, color, size } = props;
  return (
    <View>
      <Svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 384.97 384.97"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
      >
        <G>
          <G id="Menu">
            <Path d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
           C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"
            />
            <Path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
           S379.58,180.455,372.939,180.455z"
            />
            <Path d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909
           c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"
            />
          </G>
        </G>
      </Svg>

    </View>
  );
};


export const LevelsIcon = (props) => {
  const { style, color, size } = props;
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-33 -181 1065.0001 1065"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
      >
        <Path d="m829.347656 65.886719c-12.75-44.542969-53.796875-77.238281-102.371094-77.238281-48.574218 0-89.625 32.695312-102.382812 77.238281h-626.613281v58.5h626.621093c12.75 44.535156 53.800782 77.242187 102.375 77.242187 48.574219 0 89.621094-32.707031 102.375-77.242187h167.066407v-58.5zm0 0" />
        <Path d="m185.488281 233.34375c-48.574219 0-89.628906 32.703125-102.371093 77.238281h-85.136719v58.503907h85.136719c12.742187 44.542968 53.800781 77.242187 102.375 77.242187 48.574218 0 89.628906-32.699219 102.375-77.242187h708.550781v-58.503907h-708.550781c-12.746094-44.535156-53.804688-77.238281-102.378907-77.238281zm0 0" />
        <Path d="m513.601562 478.046875c-48.574218 0-89.636718 32.699219-102.382812 77.242187h-413.238281v58.5h413.238281c12.746094 44.527344 53.808594 77.242188 102.382812 77.242188 48.570313 0 89.628907-32.714844 102.371094-77.242188h380.445313v-58.5h-380.445313c-12.742187-44.542968-53.800781-77.242187-102.371094-77.242187zm0 0" />
      </Svg>


    </View>
  );
};

export const ListIcon = (props) => {
  const { style, color, size } = props;
  return (
    <View>
      <Svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 500 500"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
      >
        <G>
          <G>
            <Path d="M36,387c-19,0-36,16-36,35s17,36,36,36s35-17,35-36S55,387,36,387z" />
            <Path d="M36,215c-19,0-36,16-36,35s17,35,36,35s35-16,35-35S55,215,36,215z" />
            <Path d="M164,110h303c18,0,33-14,33-32s-15-33-33-33H164c-18,0-33,15-33,33S146,110,164,110z" />
            <Path d="M36,42C17,42,0,59,0,78s17,35,36,35s35-16,35-35S55,42,36,42z" />
            <Path d="M467,217H164c-18,0-33,15-33,33s15,33,33,33h303c18,0,33-15,33-33S485,217,467,217z" />
            <Path d="M467,389H164c-18,0-33,15-33,33s15,33,33,33h303c18,0,33-15,33-33S485,389,467,389z" />
          </G>
        </G>
      </Svg>
    </View>
  );
};

export const FilterIcon = (props) => {
  const { style, color, size } = props;
  return (
    <View>
      <Svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 480.3 480.3"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
      >
        <G>
          <G>
            <Path d="M246.2,254.1l220.6-0.7c7.5,0,13.5-6,13.5-13.5c0-7.5-6-13.5-13.5-13.5l-220.6,0.7c-6.4-31.3-34.2-54.9-67.4-54.8
       c-33.2,0.1-60.8,23.9-67,55.2l-98.2,0.3c-7.5,0-13.5,6-13.5,13.5s6,13.5,13.5,13.5l98.2-0.3c6.4,31.3,34.2,54.9,67.4,54.8
       C212.3,309.2,240,285.6,246.2,254.1z M137.5,241c-0.1-22.9,18.5-41.6,41.4-41.6c22.9-0.1,41.6,18.5,41.6,41.4
       s-18.5,41.6-41.4,41.6S137.6,263.9,137.5,241z"
            />
            <Path d="M358.9,88.5l107.4-0.3c7.5,0,13.5-6,13.5-13.5s-6-13.5-13.5-13.5l-107.4,0.3c-6.4-31.3-34.2-54.9-67.4-54.8
       c-33.2,0.1-60.8,23.9-67,55.2L13.1,62.5c-7.5,0-13.5,6-13.5,13.5c0,7.5,6,13.5,13.5,13.5l211.5-0.6c6.4,31.3,34.2,54.9,67.4,54.8
       C325.2,143.6,352.7,119.8,358.9,88.5z M250.2,75.3c-0.1-22.9,18.5-41.6,41.4-41.6c22.9-0.1,41.6,18.5,41.6,41.4
       s-18.5,41.6-41.4,41.6C268.9,116.8,250.3,98.1,250.2,75.3z"
            />
            <Path d="M359.9,418.1l107.4-0.3c7.5,0,13.5-6,13.5-13.5c0-7.5-6-13.5-13.5-13.5l-107.4,0.3c-6.4-31.3-34.2-54.9-67.4-54.8
       s-60.8,23.9-67,55.2L14,392.1c-7.5,0-13.5,6-13.5,13.5c0,7.5,6,13.5,13.5,13.5l211.6-0.6c6.4,31.3,34.2,54.9,67.4,54.8
       S353.7,449.5,359.9,418.1z M251.2,404.9c-0.1-22.9,18.5-41.6,41.4-41.6c22.9-0.1,41.6,18.5,41.6,41.4
       c0.1,22.9-18.5,41.6-41.4,41.6S251.3,427.8,251.2,404.9z"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};

export const NoStar = (props) => {
  const { style, color, size } = props;
  return (
    <View>
      <Svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 55.867 55.867"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
      >
        <Path d="M11.287,54.548c-0.207,0-0.414-0.064-0.588-0.191c-0.308-0.224-0.462-0.603-0.397-0.978l3.091-18.018L0.302,22.602
   c-0.272-0.266-0.37-0.663-0.253-1.024c0.118-0.362,0.431-0.626,0.808-0.681l18.09-2.629l8.091-16.393
   c0.168-0.342,0.516-0.558,0.896-0.558l0,0c0.381,0,0.729,0.216,0.896,0.558l8.09,16.393l18.091,2.629
   c0.377,0.055,0.689,0.318,0.808,0.681c0.117,0.361,0.02,0.759-0.253,1.024L42.475,35.363l3.09,18.017
   c0.064,0.375-0.09,0.754-0.397,0.978c-0.308,0.226-0.717,0.255-1.054,0.076l-16.18-8.506l-16.182,8.506
   C11.606,54.51,11.446,54.548,11.287,54.548z M3.149,22.584l12.016,11.713c0.235,0.229,0.343,0.561,0.287,0.885L12.615,51.72
   l14.854-7.808c0.291-0.154,0.638-0.154,0.931,0l14.852,7.808l-2.836-16.538c-0.056-0.324,0.052-0.655,0.287-0.885l12.016-11.713
   l-16.605-2.413c-0.326-0.047-0.607-0.252-0.753-0.547L27.934,4.578l-7.427,15.047c-0.146,0.295-0.427,0.5-0.753,0.547L3.149,22.584z
   "
        />
      </Svg>

    </View>
  );
};

export const GoldStar = (props) => {
  const { style, color, size } = props;
  return (
    <View>
      <Svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 426.667 426.667"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
      >
        <Polygon
          fill="#FAC917"
          points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
   81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
        />
      </Svg>


    </View>
  );
};

export const Heart = (props) => {
  const {
    style, color, size, hmargin
  } = props;
  return (
    <View style={{ marginLeft: hmargin || 0, marginRight: hmargin || 0 }}>
      <Svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 51.997 51.997"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
      >
        <G>
          <Path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
          c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
          c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
          C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25
          c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826
          c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514
          c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"
          />
        </G>
      </Svg>
    </View>
  );
};
export const ShareIcon = (props) => {
  const {
    style, color, size, hmargin
  } = props;
  return (
    <View style={{ marginLeft: hmargin || 0, marginRight: hmargin || 0 }}>
      <Svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 58.995 58.995"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
      >
        <Path d="M39.927,41.929c-0.524,0.524-0.975,1.1-1.365,1.709l-17.28-10.489c0.457-1.144,0.716-2.388,0.716-3.693
   c0-1.305-0.259-2.549-0.715-3.693l17.284-10.409C40.342,18.142,43.454,20,46.998,20c5.514,0,10-4.486,10-10s-4.486-10-10-10
   s-10,4.486-10,10c0,1.256,0.243,2.454,0.667,3.562L20.358,23.985c-1.788-2.724-4.866-4.529-8.361-4.529c-5.514,0-10,4.486-10,10
   s4.486,10,10,10c3.495,0,6.572-1.805,8.36-4.529L37.661,45.43c-0.43,1.126-0.664,2.329-0.664,3.57c0,2.671,1.04,5.183,2.929,7.071
   c1.949,1.949,4.51,2.924,7.071,2.924s5.122-0.975,7.071-2.924c1.889-1.889,2.929-4.4,2.929-7.071s-1.04-5.183-2.929-7.071
   C50.169,38.029,43.826,38.029,39.927,41.929z M46.998,2c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S42.586,2,46.998,2z
    M11.998,37.456c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S16.409,37.456,11.998,37.456z M52.654,54.657
   c-3.119,3.119-8.194,3.119-11.313,0c-1.511-1.511-2.343-3.521-2.343-5.657s0.832-4.146,2.343-5.657
   c1.56-1.56,3.608-2.339,5.657-2.339s4.097,0.779,5.657,2.339c1.511,1.511,2.343,3.521,2.343,5.657S54.166,53.146,52.654,54.657z"
        />
      </Svg>

    </View>
  );
};


export const CloseIcon = (props) => {
  const {
    style, color, size, hmargin
  } = props;
  return (
    <View style={{ marginLeft: hmargin || 0, marginRight: hmargin || 0 }}>
      <Svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        style={style}
        fill={color}
        width={size || 30}
        height={size || 30}
      >
        <G>
          <Path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z" />
        </G>
      </Svg>
    </View>
  );
};
